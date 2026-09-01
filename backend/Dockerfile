FROM python:3.10-slim

ENV PYTHONUNBUFFERED 1
ENV UVICORN_CMD_ARGS ""

ARG DEBIAN_MIRROR="http://deb.debian.org"
ARG NON_ROOT_USER=express_bot
RUN useradd --create-home ${NON_ROOT_USER}

EXPOSE 8000
WORKDIR /app

COPY poetry.lock pyproject.toml ./

RUN find /etc/apt -type f \( -name "*.list" -o -name "*.sources" \) \
    -exec sed -Ei "s|https?://deb\.debian\.org|${DEBIAN_MIRROR}|g" {} + && \
    apt-get update && \
    apt-get install -y sudo git build-essential && \
    echo "${NON_ROOT_USER} ALL = NOPASSWD: /usr/sbin/update-ca-certificates" > /etc/sudoers.d/express_bot && \
    apt-get clean autoclean && \
    apt-get autoremove --yes && \
    rm -rf /var/lib/{apt,dpkg,cache,log}/

RUN pip install poetry==2.1.2 --no-cache-dir && \
    poetry config virtualenvs.create false && \
    poetry install --without dev --no-root && \
    rm -rf /root/.cache/pypoetry

COPY app app

ARG CI_COMMIT_SHA=""
ENV GIT_COMMIT_SHA=${CI_COMMIT_SHA}

USER ${NON_ROOT_USER}

CMD sudo update-ca-certificates && \
    uvicorn --host=0.0.0.0 $UVICORN_CMD_ARGS app.main:app
