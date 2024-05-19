// import { createContext } from "react";
// Esta línea importa la función createContext de la biblioteca react. La función createContext se utiliza para crear un nuevo contexto de React, que se utiliza para pasar datos a través de la jerarquía de componentes sin tener que pasar explícitamente las props a cada nivel.

import { createContext } from "react";

// export const UserLocationContext = createContext(null);
// Esta línea crea un nuevo contexto de React llamado UserLocationContext utilizando la función createContext. El contexto se exporta para que pueda ser importado y utilizado en otros archivos de tu proyecto. createContext toma un argumento opcional que representa el valor inicial del contexto. En este caso, se pasa null como valor inicial, lo que significa que cuando se acceda al contexto antes de que se proporcione un valor real, se utilizará null.
export const UserLocationContext = createContext(null);
