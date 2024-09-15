require('dotenv').config();
const axios = require('axios');
const API_KEY = process.env.HUGGING_FACE_API;

const MODEL_ENDPOINT = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3';

const blogGenerator = async (req, res) => {
    const { keywords } = req.body;
    try {
        const response = await axios.post(MODEL_ENDPOINT, {
            inputs: `Explain the term '${keywords}' in a simple paragraph. Avoid repetition and keep the content concise and focused.`,
            parameters: {
                max_new_tokens: 700,
                temperature: 0.4, 
                top_p: 0.9, 
                stop: ["Conclusion"] 
            }
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        
        let generatedText = response.data[0].generated_text;

        const cleanedText = generatedText.replace(/Explain the term.*focused.\n\n/, '');

        res.json({ blogOutline: cleanedText });
    } catch (err) {
        console.error('Error: ', err.response ? err.response.data : err.message);
        res.status(500).json({ error: 'Blog generation failed', details: err.response ? err.response.data : err.message });
    }
};

module.exports = { blogGenerator };
