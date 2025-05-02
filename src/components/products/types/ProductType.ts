export interface ProductType {
  id: number;
  titulo: string;
  precio: number;
  stock: number;
  envio: number;
  image_url?: string | null;
  image_alt: string | undefined;
  image_slug: string;
  description: string;
}
