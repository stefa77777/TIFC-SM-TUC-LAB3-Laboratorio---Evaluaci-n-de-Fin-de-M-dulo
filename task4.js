const SERVER_URL = "http://localhost:3000";

export async function delUser(id) {
    try {
    const response = await fetch(`${SERVER_URL}/users/${id}`, {
        method: "DELETE"
    });
    const result = await response.json();
    console.log("Usuario eliminado con éxito:", result); // Esto imprimirá el mensaje en la consola
    return result;
    } catch (error) {
    console.error("Error al eliminar usuario:", error);
    }
}// Task 4: delUser(number)

delUser(5);