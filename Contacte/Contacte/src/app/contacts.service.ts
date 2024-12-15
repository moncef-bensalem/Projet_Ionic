import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  nom: string;
  classe: string;
  telephone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [];
  private nextId = 1;

  constructor() {}

  // Obtenir la liste des contacts
  getContacts(): Contact[] {
    return this.contacts;
  }

  // Ajouter un contact
  addContact(nom: string, classe: string, telephone: string): void {
    const newContact: Contact = {
      id: this.nextId++,
      nom,
      classe,
      telephone
    };
    this.contacts.push(newContact);
  }

  // Modifier un contact
  updateContact(id: number, nom: string, classe: string, telephone: string): void {
    const contact = this.contacts.find(c => c.id === id);
    if (contact) {
      contact.nom = nom;
      contact.classe = classe;
      contact.telephone = telephone;
    }
  }

  // Supprimer un contact
  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}
