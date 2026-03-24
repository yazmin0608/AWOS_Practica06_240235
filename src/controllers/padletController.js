import dotenv from 'dotenv';
dotenv.config();

export const renderMuro = (req, res) => {
    // Usamos el ID de tu .env (asegúrate que sea el ID de tu muro real)
    const boardId = process.env.PADLET_BOARD_ID;
    
    res.render('muro_colaborativo', { 
        pageTitle: 'Muro de Planeación - Padlet',
        boardId: boardId
    });
};