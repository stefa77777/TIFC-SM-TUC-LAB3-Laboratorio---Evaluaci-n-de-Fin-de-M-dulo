const SERVER_URL = "http://localhost:3000";

export async function listUsers() {
    try {
    const response = await fetch(`${SERVER_URL}/users`);
    const data = await response.json();
    console.log(data);
    return data;
    } catch (error) {
    console.error("Error al listar usuarios:", error);
    }
}// Task 2: listUsers()

listUsers();