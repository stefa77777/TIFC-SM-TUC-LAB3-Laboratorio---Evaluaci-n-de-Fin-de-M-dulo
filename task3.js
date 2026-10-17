const SERVER_URL = "http://localhost:3000";

export async function addUser(first_name, last_name, email) {
    try {
    const response = await fetch(`${SERVER_URL}/users`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email
        })
    });
    const newUser = await response.json();
    console.log("Usuario agregado con éxito:", newUser);
    return newUser;
    } catch (error) {
    console.error("Error al agregar usuario:", error);
    }
}

addUser("Alicia", "Miranda", "alicia@example.com");// Task 3: addUser(first_name, last_name, email)

