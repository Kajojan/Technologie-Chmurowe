ARG ARG PYTHON_VERSION=3.9

FROM python:${PYTHON_VERSION}

WORKDIR /app

COPY myapp ./

RUN pip install -r requirements.txt

CMD ["python", "/app/main.py"]