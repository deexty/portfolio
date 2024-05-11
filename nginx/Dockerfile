FROM nginx:1.15.0

RUN rm /etc/nginx/conf.d/default.conf

# Copie os arquivos de certificado para o diretório /etc/nginx
COPY certificado.pem /etc/nginx/
COPY chave_privada.pem /etc/nginx/

COPY nginx.conf /etc/nginx/conf.d