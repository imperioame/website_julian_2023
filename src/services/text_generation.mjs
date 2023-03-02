export function call_api_hf_gpt2(lang){
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/gpt2",
            {
                headers: { Authorization: "Bearer " + process.env.HF_API_TOKEN },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    const data = {
        en: "I'm glad you've reached this part of the page ",
        es: ""
    }
    let query_content = lang == 'es' ? data.es : data.en;
    query({"inputs": query_content}).then((response) => {
        console.log(response[0].generated_text);
        document.getElementById("contacto_extra_parrafo").innerHTML = response[0].generated_text;
    });
}