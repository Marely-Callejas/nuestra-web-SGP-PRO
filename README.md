# 🎓 SGP-Pro

**Sistema de Gestión de Prácticas y Horas Sociales**

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)
![Versión](https://img.shields.io/badge/versión-1.0.0-blue)
![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql&logoColor=white)
![License](https://img.shields.io/badge/licencia-MIT-green)

SGP-Pro es una plataforma desarrollada para digitalizar, controlar y validar las bitácoras de prácticas profesionales y horas sociales de los estudiantes del **Instituto Nacional General Francisco Menéndez (INFRAMEN)**.

---

## 📋 Descripción

El proceso tradicional de registro de prácticas profesionales se realiza de forma manual, lo que genera problemas como pérdida de documentos, errores de cálculo, lentitud en la revisión y gastos innecesarios en papelería.

**SGP-Pro** transforma ese proceso en un entorno digital centralizado, seguro y automatizado, permitiendo:

- ✅ Registro digital de actividades diarias
- ✅ Cálculo automático de horas acumuladas
- ✅ Validación por parte de tutores y administradores
- ✅ Generación de reportes en PDF con formato oficial
- ✅ Seguimiento visual del progreso del estudiante

---

## 🎯 Objetivo General

Desarrollar una plataforma que permita el registro, control y validación de las bitácoras de prácticas profesionales y horas sociales de forma automatizada y eficiente, utilizando **Python** y **MySQL**.

---

## ✨ Características Principales

### 👨‍🎓 Módulo de Estudiante
- Registro de actividades con fecha, descripción y horas de entrada/salida
- Visualización de bitácoras con scroll horizontal y vertical
- Barra de progreso con porcentaje de horas completadas
- Estados por actividad: Pendiente, Aprobado, Rechazado
- Eliminación de registros no validados

### 👨‍🏫 Módulo de Tutor
- Consulta de bitácoras de estudiantes asignados
- Seguimiento del avance de horas
- Visualización de actividades por estado

### 👨‍💼 Módulo de Administrador
- Visualización completa de todas las bitácoras
- Filtros por estado y especialidad
- Aprobación y rechazo de actividades
- Generación de **Hoja de Control en PDF** con formato oficial del INFRAMEN
- Gestión de estudiantes y reportes

### 🔐 Módulo de Autenticación
- Registro de estudiantes con validaciones
- Inicio de sesión con selección de rol
- Control de permisos por tipo de usuario

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| ![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white) | Lenguaje principal del backend |
| ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white) | Base de datos relacional |
| ![Tkinter](https://img.shields.io/badge/-Tkinter-FF6F00) | Interfaz gráfica de escritorio |
| ![ReportLab](https://img.shields.io/badge/-ReportLab-red) | Generación de reportes PDF |
| ![Pillow](https://img.shields.io/badge/-Pillow-blue) | Manejo de imágenes |
| ![MySQL Connector](https://img.shields.io/badge/-MySQL%20Connector-4479A1) | Conexión Python-MySQL |

---

## 🚀 Instalación y Uso

### Requisitos previos

- Python 3.10 o superior
- MySQL Server 8.0 o superior
- MySQL Workbench (opcional, para gestión de BD)