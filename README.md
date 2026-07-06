# Smart Mailbox Redirector

Un componente visual e interactivo construido con JavaScript puro que ayuda al usuario a ir directamente a su bandeja de entrada después de registrarse, evitando que tenga que buscar su proveedor de correo manualmente.

### ¿Qué problema resuelve?
Cuando un usuario se registra en una página, casi siempre aparece un mensaje que dice "Te enviamos un correo de confirmación". El usuario tiene que abrir una pestaña nueva, escribir la dirección de su correo (Gmail, Outlook, etc.) y buscar el mensaje. 

Este componente automatiza ese proceso: lee el correo que ingresó el usuario, detecta el proveedor y genera un botón interactivo con el color oficial de su correo para que vaya directo a su buzón en un solo clic.

## Instalación

Para incluir este componente en tu página web, añade los siguientes archivos dentro de tu estructura HTML:

1. El archivo CSS dentro de la etiqueta `<head>`:
   
   <link rel="stylesheet" href="css/componente.css">

2. El archivo JavaScript justo antes de cerrar la etiqueta `</body>`:
   
   <script src="js/componente.js"></script>

---

## Modo de Uso

El componente es reutilizable y dinámico. Solo necesitas crear un contenedor vacío en tu HTML con un ID y llamarlo desde la lógica de JavaScript pasando el correo del usuario como parámetro.

### Código HTML:
   
   <div id="contenedor-correo"></div>

### Código JavaScript:
   
   // 1. Instanciar el componente apuntando al contenedor de tu HTML
   const botonInteligente = new SmartMailButton('contenedor-correo');

   // 2. Ejecutar el componente pasando el correo electrónico del usuario
   botonInteligente.init('usuario@gmail.com');

### Parámetros aceptados:

| Método | Parámetro | Tipo | Descripción |
| --- | --- | --- | --- |
| `init()` | `emailUsuario` | String | El correo ingresado por el usuario. El componente extraerá el dominio (como gmail.com) para configurar el diseño y el enlace. |
