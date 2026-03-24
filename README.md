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
| 4. | **Módulo de IA Generativa** | Integración de Google Gemini API para la generación de contenido dinámico. | 8 | ✅ Finalizada |
| 5. | **Módulo de Pagos (Fintech)** | Implementación de Checkout y gestión de transacciones con Mercado Pago. | 8 | ✅ Finalizada |
| 6. | **Módulo de Planeación (Colaborativo)** | Integración de Padlet API para la gestión de tableros. | 7 | ✅ Finalizada |
| 7. | **Documentación de Endpoints y Pruebas** | Creación de la tabla de 20 endpoints y registro de resultados. | 10 | ✅ Finalizada |

---


## 📈📉📊 Estructura de la Práctica06_240235

```bash
AWOS_PRACTICA06_240235/
├── Docs/
│   └── capturas/            # Evidencias de funcionamiento y pruebas de APIs
├── node_modules/            # Dependencias del proyecto (Express, SDKs, Dotenv)
├── src/
│   ├── config/              # Configuraciones globales y de conexión
│   ├── controllers/         # Lógica de consumo de APIs (IA, Pagos, Planeación)
│   │   ├── geminiController.js
│   │   ├── mercadoPagoController.js
│   │   └── padletController.js
│   ├── public/              # Archivos estáticos y estilos de la aplicación
│   ├── routes/              # Definición de rutas y endpoints del sistema
│   │   ├── geminiRoutes.js
│   │   ├── mercadoPagoRoutes.js
│   │   └── padletRoutes.js
│   ├── views/               # Plantillas Pug para el renderizado de la interfaz
│   │   ├── checkout.pug
│   │   ├── ia_dashboard.pug
│   │   ├── index.pug
│   │   ├── layout.pug
│   │   └── muro_colaborativo.pug
│   └── server.js            # Punto de entrada principal del servidor Express
├── .env                     # Variables de entorno y API Keys (Privado)
├── .gitignore               # Archivos y carpetas excluidos de Git
├── package-lock.json        # Registro detallado de versiones de dependencias
├── package.json             # Scripts de ejecución (npm run dev) y dependencias
├── README.md                # Documentación técnica completa (Fase 07)
└── tailwind.config.js       # Configuración de estilos y diseño corporativo
```

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

### A. 🧠 Gemini AI Generative API (Google)
| # | Endpoint | Método | Descripción |
|:--|:--|:--|:--|
| 1 | /v1/models | GET | Listar modelos disponibles |
| 2 | /v1/models/{model}:generateContent | POST | Generar respuesta de texto |
| 3 | /v1/models/{model}:streamGenerateContent | POST | Generar respuesta en streaming |
| 4 | /v1/models/{model}:countTokens | POST | Contar tokens de un prompt |
| 5 | /v1/models/{model}:embedContent | POST | Generar embeddings de texto |
| 6 | /v1/models/{model}/cachedContents | GET | Consultar contenidos cacheados |
| 7 | /v1/operations/{name} | GET | Consultar estado de operación larga |
| 8 | /v1/files | POST | Subir archivos para análisis |
| 9 | /v1/files/{file_id} | GET | Obtener metadatos de un archivo |
| 10 | /v1/files | GET | Listar archivos subidos |
| 11 | /v1/models/{model}/batchPredict | POST | Predicción por lotes |
| 12 | /v1/tunedModels | GET | Listar modelos personalizados |
| 13 | /v1/tunedModels/{model_id} | DELETE | Eliminar modelo tuneado |
| 14 | /v1/models/{model}:generateAnswer | POST | Generar respuesta basada en fuentes |
| 15 | /v1beta/corpora | POST | Crear corpus para RAG |
| 16 | /v1beta/corpora/{id}/documents | GET | Listar documentos en un corpus |
| 17 | /v1/models/{model}:computeTokens | POST | Computar tokens exactos |
| 18 | /v1/projects/{id}/locations | GET | Listar ubicaciones de despliegue |
| 19 | /v1/models/{model}:patch | PATCH | Actualizar configuración de modelo |
| 20 | /v1/models/{model}:get | GET | Obtener detalles técnicos del modelo |

### B. 💳 Mercado Pago SDK (Fintech)
| # | Endpoint | Método | Descripción |
|:--|:--|:--|:--|
| 1 | /v1/checkout/preferences | POST | Crear preferencia de pago |
| 2 | /v1/checkout/preferences/{id} | GET | Consultar preferencia existente |
| 3 | /v1/checkout/preferences/{id} | PUT | Actualizar preferencia |
| 4 | /v1/payments | POST | Crear un pago directo |
| 5 | /v1/payments/{id} | GET | Consultar estado de un pago |
| 6 | /v1/payments/{id} | PUT | Reembolsar o cancelar pago |
| 7 | /v1/customers | POST | Registrar un cliente nuevo |
| 8 | /v1/customers/search | GET | Buscar clientes registrados |
| 9 | /v1/cards | POST | Tokenizar una tarjeta de crédito |
| 10 | /v1/preapproval | POST | Crear suscripción recurrente |
| 11 | /v1/preapproval_plan | POST | Definir plan de suscripción |
| 12 | /v1/merchants_orders | POST | Crear orden de comercio |
| 13 | /v1/merchants_orders/{id} | GET | Consultar orden comercial |
| 14 | /v1/identification_types | GET | Listar tipos de documentos oficiales |
| 15 | /v1/payment_methods | GET | Listar métodos de pago activos |
| 16 | /v1/refunds | POST | Solicitar devolución de dinero |
| 17 | /v1/stores | POST | Crear una sucursal física |
| 18 | /v1/pos | POST | Integrar terminal punto de venta |
| 19 | /v1/users/me | GET | Consultar datos de mi cuenta |
| 20 | /v1/instore/qr/seller/collectors | POST | Generar código QR de pago |

### C. 📌 Padlet API (Colaboración)
| # | Endpoint | Método | Descripción |
|:--|:--|:--|:--|
| 1 | /v1/padlets | GET | Listar todos mis muros |
| 2 | /v1/padlets | POST | Crear un nuevo muro |
| 3 | /v1/padlets/{id} | GET | Obtener detalles de un muro |
| 4 | /v1/padlets/{id} | PATCH | Actualizar título o descripción |
| 5 | /v1/padlets/{id} | DELETE | Eliminar un muro |
| 6 | /v1/padlets/{id}/posts | GET | Listar publicaciones del muro |
| 7 | /v1/padlets/{id}/posts | POST | Crear nueva publicación |
| 8 | /v1/posts/{id} | GET | Ver detalle de un post específico |
| 9 | /v1/posts/{id} | PATCH | Editar contenido de un post |
| 10 | /v1/posts/{id} | DELETE | Borrar una publicación |
| 11 | /v1/padlets/{id}/collaborators | GET | Listar colaboradores del muro |
| 12 | /v1/padlets/{id}/collaborators | POST | Invitar a un colaborador |
| 13 | /v1/padlets/{id}/copy | POST | Duplicar un muro existente |
| 14 | /v1/padlets/{id}/archive | POST | Archivar un tablero |
| 15 | /v1/users/me | GET | Obtener perfil del usuario actual |
| 16 | /v1/padlets/{id}/privacy | PATCH | Cambiar visibilidad (Público/Privado) |
| 17 | /v1/attachments | POST | Subir archivos a un post |
| 18 | /v1/padlets/{id}/reactions | POST | Reaccionar a una publicación |
| 19 | /v1/padlets/{id}/comments | POST | Añadir comentario a un post |
| 20 | /v1/webhooks | POST | Configurar notificaciones en tiempo real |

---

## 🧪 2. Registro de Pruebas y Resultados

| Prueba | Descripción | Resultado Esperado | Estatus |
|:--|:--|:--|:--|
| **01: Conexión Gemini** | Envío de prompt inmobiliario a la IA. | Respuesta coherente sobre el mercado. | ✅ Exitosa |
| **02: Generación Preferencia** | Clic en "Pagar con Mercado Pago". | Creación de ID de preferencia en consola. | ✅ Exitosa |
| **03: Flujo de Pago** | Simulación de redirección tras clic. | Redirección exitosa a la ruta /ia. | ✅ Exitosa |
| **04: Embebido Padlet** | Carga del muro en ruta /muro. | Visualización del muro propio (240235_7). | ✅ Exitosa |
| **05: Navegación Global** | Clic en Navbar a través de todos los módulos. | Cambio de vistas sin errores 404/500. | ✅ Exitosa |

---

## 📸 Evidencias del Sistema (Pruebas Finales)

### 01 — Servidor Activo e Identidad
**Descripción:** Inicialización exitosa de Node.js mediante Nodemon, inyectando variables de entorno (.env) y mostrando la matrícula 240235 en el servidor local.
![Servidor](docs/capturas/servidor_ok.png)

### 02 — Gemini AI · Análisis Inmobiliario
**Descripción:** Consulta dinámica a la API de Google permitiendo al usuario generar reportes de plusvalía y asesoría inteligente en tiempo real.
![Gemini Inicio](docs/capturas/gemini_inicio.png)
![Gemini Respuesta](docs/capturas/gemini_respuesta.png)

### 03 — Mercado Pago · Generación de Preferencia
**Descripción:** Integración del SDK para crear preferencias de pago dinámicas con el monto de la matrícula ($2,402.00 MXN).
![Checkout Pago](docs/capturas/checkout_inicio.png)
![Preferencia Generada](docs/capturas/checkout_preferencia.png)

### 04 — Mercado Pago · Flujo de Transacción
**Descripción:** Simulación del proceso de pago con bloqueo de UI (Procesando...) y redirección automática al dashboard de éxito tras la validación de la API.
![Proceso Pago](docs/capturas/pago_proceso.png)

### 05 — Padlet · Muro de Planeación Personal
**Descripción:** Inserción de Iframe dinámico utilizando el ID `u5n3tub9egmbeyeu` vinculado a la cuenta oficial de Yazmin Ariana (240235_7).
![Muro Colaborativo](docs/capturas/padlet_muro.png)

### 06 — Landig Pague Exitoso
**Descripción:** Carga Exitosa de la Landing Pague, Mostrando Las 3 Funcionalidades que Tiene
![Servidor](docs/capturas/Landing_Pague1.png)
![Servidor](docs/capturas/Landing_Pague2.png)

---

<div align="center">

 👩‍💻 Autora

Yazmin Ariana Esquivel Marquez  

Matrícula: 240235

</div>

---

<div align="center">

*Práctica 06 — Consumo de APIs para Plataformas Online* **UTXJ - 2026**

</div>