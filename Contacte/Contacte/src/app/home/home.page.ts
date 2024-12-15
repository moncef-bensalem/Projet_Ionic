import { Component } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonLabel, IonItem, IonButton, IonList } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonLabel, IonItem, IonButton, IonList],
})
export class HomePage {
  contacts: Contact[] = [];
  formVisible = false;
  formContact: Contact = { id: 0, nom: '', classe: '', telephone: '' };
  isEditing = false;

  constructor(private contactsService: ContactsService) {
    this.loadContacts();
  }

  // Charger les contacts depuis le service
  loadContacts() {
    this.contacts = this.contactsService.getContacts();
  }

  // Ouvrir le formulaire pour ajouter un contact
  openForm() {
    this.isEditing = false;
    this.formContact = { id: 0, nom: '', classe: '', telephone: '' };
    this.formVisible = true;
  }

  // Ouvrir le formulaire pour modifier un contact
  editContact(contact: Contact) {
    this.isEditing = true;
    this.formContact = { ...contact };
    this.formVisible = true;
  }

  // Fermer le formulaire
  closeForm() {
    this.formVisible = false;
  }

  // Soumettre le formulaire
  onSubmit() {
    if (this.isEditing) {
      this.contactsService.updateContact(this.formContact.id, this.formContact.nom, this.formContact.classe, this.formContact.telephone);
    } else {
      this.contactsService.addContact(this.formContact.nom, this.formContact.classe, this.formContact.telephone);
    }
    this.loadContacts();
    this.closeForm();
  }

  // Supprimer un contact
  deleteContact(contact: Contact) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${contact.nom} ?`)) {
      this.contactsService.deleteContact(contact.id);
      this.loadContacts();
    }
  }
}
