import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorDeNotaPage } from './editor-de-nota.page';

describe('EditorDeNotaPage', () => {
  let component: EditorDeNotaPage;
  let fixture: ComponentFixture<EditorDeNotaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDeNotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
