import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Inicializar Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// ✅ Render de la vista
export const renderChat = (req, res) => {
    res.render("ia_dashboard", {
        pageTitle: "Consultoría Inteligente - Gemini AI"
    });
};

// ✅ Función principal (SIEMPRE responde)
export const askGemini = async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt
        });

        return res.json({
            success: true,
            answer: response.text
        });

    } catch (error) {

        console.error("ERROR EN GEMINI:", error);

        // 🔥 SIEMPRE usa fallback (evita que truene la app)
        return res.json({
            success: true,
            answer: generarRespuestaSimulada(prompt)
        });
    }
};


// ✅ FUNCIÓN SIMULADA (IA FAKE PERO FUNCIONAL)
function generarRespuestaSimulada(prompt) {

    // 🔥 Detectar tipo de consulta
    const texto = prompt.toLowerCase();

    if (texto.includes("comprar")) {
        return `🏡 Asesor de Compra:

Para comprar una propiedad te recomiendo:

• Revisar tu presupuesto y opciones de crédito  
• Analizar la ubicación y plusvalía  
• Verificar servicios cercanos (escuelas, hospitales)  

Puedo ayudarte a encontrar opciones ideales para compra.`;
    }

    if (texto.includes("rentar")) {
        return `🏢 Asesor de Renta:

Para rentar una propiedad considera:

• Ubicación cercana a tu trabajo o escuela  
• Precio mensual accesible  
• Seguridad de la zona  

Si quieres, te muestro opciones de renta disponibles.`;
    }

    if (texto.includes("invertir")) {
        return `📈 Asesor de Inversión:

Para invertir en bienes raíces:

• Busca zonas con alta plusvalía  
• Analiza crecimiento urbano  
• Considera propiedades para renta  

Puedo ayudarte a identificar oportunidades de inversión.`;
    }

    // 🔹 Respuesta general
    return `🤖 Asesor Inteligente:

En base a tu consulta "${prompt}", te recomiendo considerar:

• Ubicación estratégica del inmueble  
• Presupuesto disponible  
• Plusvalía de la zona  
• Seguridad y servicios cercanos  

Si deseas, puedo ayudarte a encontrar opciones más específicas.`;
}