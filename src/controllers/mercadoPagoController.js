import dotenv from 'dotenv';

dotenv.config();

export const renderCheckout = (req, res) => {
    res.render('checkout', {
        pageTitle: 'Pasarela de Pagos - Mercado Pago'
    });
};

export const createPreference = async (req, res) => {
    try {
        // Simulamos un retraso de red para que se vea real
        await new Promise(resolve => setTimeout(resolve, 800));

        // Enviamos una URL de éxito de Mercado Pago o una interna
        res.json({
            id: "simulated-preference-2402",
            init_point: "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=12345"
        });
    } catch (error) {
        res.status(500).json({ error: "Error en la pasarela" });
    }
};