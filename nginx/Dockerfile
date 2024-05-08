FROM nginx:1.15.0

RUN rm /etc/nginx/conf.d/default.conf

# Copie os arquivos de certificado para o diretório /etc/nginx
COPY certificado.crt /etc/nginx/
COPY chave_privada.key /etc/nginx/

COPY nginx.conf /etc/nginx/conf.d