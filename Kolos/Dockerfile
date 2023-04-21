
FROM alpine:latest as builder

ENV PORT=${PORT}

WORKDIR /app

RUN apk add py3-pip

COPY requirements.txt .

RUN pip install --user -r requirements.txt

COPY  . .

EXPOSE 5000

CMD [ "python3", "main.py" ]


