import { Categoria } from '../categorias/model';

export class Categorias{
id: number;
nome: string;
}

export class Produto{
  id: number;
  nome: string;
  preco: number;
  categorias: Categoria[] = [];
}

