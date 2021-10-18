import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.name}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

