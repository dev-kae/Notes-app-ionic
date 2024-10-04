import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor-de-nota',
  templateUrl: './editor-de-nota.page.html',
  styleUrls: ['./editor-de-nota.page.scss'],
})
export class EditorDeNotaPage implements OnInit {
  nota: { label: string; texto: string };

  constructor(private router: Router) {
    this.nota = { label: '', texto: '' }; // Inicializa a nota
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.nota = navigation.extras.state['nota'] || this.nota; // Atribui a nota recebida
    }
  }

  // Função para salvar a nota
  salvarNota() {
    // Obtém as notas existentes do Local Storage
    const notas = JSON.parse(localStorage.getItem('notas') || '[]');

    // Atualiza a nota se ela já existir ou adiciona como nova
    const index = notas.findIndex((n: { label: string }) => n.label === this.nota.label);
    if (index !== -1) {
      // Atualiza a nota existente
      notas[index].texto = this.nota.texto;
    } else {
      // Adiciona uma nova nota
      notas.push(this.nota);
    }

    // Salva as notas atualizadas de volta no Local Storage
    localStorage.setItem('notas', JSON.stringify(notas));
  }
}
