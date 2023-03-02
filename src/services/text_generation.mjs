export function call_api_hf_gpt2(lang) {
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/gpt2", {
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

    const data = {
        en: "Me alegra que hayas llegado a esta parte de mi página web ",
        es: "I'm glad you've reached this part of the page "
    }

    let query_content = lang == 'es' ? data.es : data.en;

    let params = {
        "inputs": query_content,
        "options": 'wait_for_model'
    };
    let final_response = params.inputs;
    
    recursive_call(params);



    function recursive_call(params) {
        query(params).then((response) => {
            final_response = response[0].generated_text;
            console.log(final_response);

            console.log(final_response.length);
            if (final_response.length < 500) {
                params.inputs = final_response;
                recursive_call(params)
            }

            document.getElementById("contacto_extra_parrafo").innerHTML = final_response;
        });
    }
}