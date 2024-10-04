import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  notas: { label: string; texto: string }[] = []; // Array de notas
  isPopoverOpen: boolean = false; // Controle do popover
  popoverEvent: any; // Evento do popover
  novaNota: string = ''; // Valor da nova nota

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializa com uma nota de exemplo, se desejado
    // this.notas.push({ label: 'Nota de Exemplo', texto: 'Texto da Nota' });
  }

  abrirEditorDeNota(nota: { label: string; texto: string }) {
    // Navega para a página de edição passando a nota
    this.router.navigate(['/editor-de-nota'], { state: { nota } });
  }

  adicionarNota() {
    if (this.novaNota.trim()) {
      this.notas.push({ label: this.novaNota, texto: '' });
      this.novaNota = ''; 
    }
  }

  openPopover(ev: any) {
    this.isPopoverOpen = true;
    this.popoverEvent = ev;
  }

  closePopover() {
    this.isPopoverOpen = false;
  }
}
