
export function call_api_hf_gpt2() {

    async function query(data) {
        console.log(window.currentLanguage[0]);
        const api_language = window.currentLanguage[0] == 'es' ? 'https://api-inference.huggingface.co/models/flax-community/gpt-2-spanish' : 'https://api-inference.huggingface.co/models/gpt2';

        const response = await fetch(api_language, {
                headers: {
                    Authorization: "Bearer " + process.env.HF_API_TOKEN
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    console.log(document.getElementById("contacto_extra_input").value);
    const query_content = document.getElementById("contacto_extra_input").value;

    let response_limit = 200;
    if(query_content.length > 200){
        response_limit = query_content.length + 200;
    }

    const error = {
        es: 'El servicio de GPT2 no se encuentra disponible en este momento. Probar dentro de la próxima hora. (Demasiadas consultas)',
        en: 'GPT2 service is not available in this moment. Try again in the next hour.  (Too many requests)'
    }
    let error_content = window.currentLanguage[0] == 'es' ? error.es : error.en;

    let params = {
        "inputs": query_content,
        "options": 'wait_for_model'
    };
    let final_response = params.inputs;

    recursive_call(params);




    function recursive_call(params) {
        query(params).then((response) => {
            if (!response.error) {
                final_response = response[0].generated_text;
                console.log(final_response);



                console.log(final_response.length);
                if (final_response.length < response_limit) {
                    params.inputs = final_response;
                    recursive_call(params)
                }

                document.getElementById("contacto_extra_input").value = final_response + '...';
            } else {
                console.error(response.error);
                document.getElementById("error_msj").innerHTML = error_content;
                document.getElementById("error_msj").style.display = "block";
            }
        });
    }
}