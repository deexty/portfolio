import path from "path"
import { fileURLToPath } from 'url';

class Imagem{
    static async consomeImagem(req,res){
        const arquivo = req.params.arquivo;

        try {
            // Verifica se o nome do arquivo de imagem é válido
            if (!arquivo) {
                return res.status(400).json({ error: 'Nome da imagem não fornecido' });
            }

            // Retorna o caminho completo da imagem
            const imagePath = path.resolve('/var/api/uploads', arquivo);

            // Envia a imagem como resposta
            res.sendFile(imagePath);
        } catch (error) {
            // Retorna uma mensagem de erro se ocorrer uma exceção
            res.status(500).json({ error: error.message });
        }
    }
}

export default Imagem