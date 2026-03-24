# AWOS_Practica06_240235: Consumo de APIs para Plataformas Online

<p align="justify">
El proyecto <b>AWOS_Practica06_240235</b> consiste en el desarrollo de una plataforma robusta para la <b>Gestión y Consumo de APIs de Terceros</b>. La aplicación integra servicios críticos de la industria actual: procesamiento de pagos seguros (Mercado Pago), generación de contenido mediante Inteligencia Artificial (Google Gemini AI) y gestión colaborativa de actividades (Padlet). Basado en una arquitectura orientada a servicios (SOA), el sistema garantiza escalabilidad y seguridad en el manejo de API Keys individuales mediante el patrón de diseño MVC.
</p>

---

## 🛠️ Tecnologías Utilizadas
* **Backend:** Node.js / Express
* **Frontend:** Tailwind CSS / Template Engines (Pug/EJS)
* **Arquitectura:** SOA / MVC
* **Base de Datos:** ORM (Sequelize/Prisma)

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat-square&logo=express&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![MercadoPago](https://img.shields.io/badge/Mercado_Pago-v2-009EE3?style=flat-square&logo=mercadopago&logoColor=white)

---

---

## 📈 Tablas de Fases

| No. | Tema |  Descripción | Potenciador | Estatus |
| :--- | :--- | :--- | :--- | :--- |
| 1. | **Configuración de Entorno** | Inicialización de NodeJS, Express y variables de entorno (.env). Configuración de Git y ramas. | 2 | ✅ Finalizada |
| 2. | **Infraestructura de Routing y MVC** | Estructuración de carpetas y definición de rutas para cada servicio. | 5 | ✅ Finalizada |
| 3. | **Frontend Base (Tailwind & Layouts)** | Implementación de la Landing Page y componentes reutilizables. | 5 | ✅ Finalizada |
| 4. | **Módulo de IA Generativa** | Integración de Google Gemini API para la generación de contenido dinámico. | 8 | ❌ |
| 5. | **Módulo de Pagos (Fintech)** | Implementación de Checkout y gestión de transacciones con Mercado Pago. | 8 | ❌ |
| 6. | **Módulo de Planeación (Colaborativo)** | Integración de Padlet API para la gestión de tableros. | 7 | ❌ |
| 7. | **Documentación de Endpoints y Pruebas** | Creación de la tabla de 20 endpoints y registro de resultados. | 10 | ❌ |

---

### 🔍 Módulos Principales
* **Módulo Fintech (Mercado Pago):** Generación de preferencias de pago, checkout interactivo y consulta de estados de transacción.
* **Módulo IA (Gemini):** Chatbot especializado y generación de reportes automáticos utilizando modelos de lenguaje avanzados.
* **Módulo de Actividades (Padlet):** Visualización de tableros, creación de muros de trabajo y gestión de notas en tiempo real.
    
---

## 🚀 Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Configurar el archivo `.env` con las API Keys proporcionadas.
4. Iniciar el servidor con `npm run dev`.