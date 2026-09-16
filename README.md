# 🛡️ VIRUS PURGE - Cybersecurity Arcade FPS (PC & WebXR)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r174-green.svg)](https://threejs.org/)
[![WebXR](https://img.shields.io/badge/WebXR-Ready-orange.svg)](https://immersiveweb.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple.svg)](https://vitejs.dev/)

**VIRUS PURGE** es un videojuego shooter en primera persona (FPS) arcade y multiplataforma (Web PC y VR WebXR para Meta Quest), ambientado en una simulación diegética de ciberseguridad.

El jugador asume el rol de una **Unidad de Defensa Cibernética (Antivirus AI)** inyectada directamente en el bus de datos y la placa base (*The Motherboard*) de una computadora infectada por una brecha masiva de malware.

---

## Enlace : https://vickman123.github.io/FPS-WEBXR-VIRUS-PURGE/


## 🚀 Características Principales

* **Ambiente Placa Base ("The Motherboard")**:
  * Pistas de silicio y cobre dorado con flujo de datos en tiempo real.
  * Módulos de memoria RAM verticales como coberturas tácticas con iluminación RGB.
  * Zócalo de procesador CPU central y condensadores electrolíticos.
* **Jerarquía de Malware y Amenazas**:
  1. 🔍 **`VIRUS RECON (Drone)`**: Código malicioso ligero en enjambre con sensor óptico (zona de headshot crítico).
  2. ⚡ **`WORM SPREADER (Gusano de Red)`**: Malware rápido y serpenteante en trayectoria sinusoidal/zig-zag.
  3. 🛡️ **`TROJAN CARRIER (Caballo de Troya)`**: Tanque blindado con un escudo digital frontal holográfico (`svchost.exe`) que mitiga el 80% del daño y expone su núcleo malicioso trasero.
  4. ☣️ **`RANSOMWARE CORE (Jefe de Fase)`**: Monolito de cifrado de sector con barra de vida dedicada, cadenas criptográficas y pulsos de bloqueo.
* **Sistema de Fases Arcade (`WaveManager`)**:
  * **Fase 1**: *L1/L2 Cache // Detección Inicial*
  * **Fase 2**: *Memory Bus // Bancos de Memoria RAM*
  * **Fase 3**: *File System Clusters // Sectores de Almacenamiento*
  * **Fase 4**: *Kernel Overload // Desbordamiento del Núcleo*
  * **Fase 5**: *System Core // Ransomware Lockdown (Jefe)*
  * **Fases Posteriores**: Escalado procedural infinito de dificultad.
  * **Mecánica de Auto-reparación**: Al purgar un sector con éxito, el antivirus desfragmenta y restaura **+30% a +50% de integridad (salud)**.
* **Gunplay & Feedback Sensorial**:
  * Arma procedural 3D con mira réflex holográfica, retroceso elástico (kickback procedural), destello dinámico (*muzzle flash*) y trazadores de plasma.
  * Audio procedural de latencia cero generado con la **Web Audio API** (sin dependencias de archivos externos): disparos, recarga mecánica, hitmarkers tácticos, ding de headshot cristalino, alarma de brecha y desintegración de amenazas.
  * Sistema de puntuación con multiplicador de combo en tiempo real y registro de precisión (*Accuracy*).

---

## 🕹️ Controles (PC)

| Acción | Tecla / Control |
| :--- | :--- |
| **Movimiento** | <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> |
| **Apuntar / Mirar** | Ratón libre (**Pointer Lock**) |
| **Disparar** | Click Izquierdo |
| **Recargar Búfer** | <kbd>R</kbd> |
| **Pausar / Liberar Cursor** | <kbd>ESC</kbd> |

---

## 🥽 Compatibilidad WebXR / VR

El motor de render cuenta con `renderer.xr.enabled = true` y arquitectura desacoplada de entrada (`InputManager`), preparado para conectar controladores de Meta Quest (locomoción suave con joystick analógico, apuntado 1:1 en el espacio y disparo por gatillo).

---

## 🛠️ Instalación y Ejecución Local

```bash
# 1. Clonar el repositorio
git clone git@github.com:Vickman123/FPS-WEBXR-VIRUS-PURGE.git
cd FPS-WEBXR-VIRUS-PURGE

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev

# 4. Compilar para producción
npm run build
```

Abre en tu navegador: `http://localhost:5173/` (o la IP de red local para probar en dispositivos VR en la misma red Wi-Fi).
