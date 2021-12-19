FROM node:lts

RUN apt-get update -y && apt-get install -y fish
RUN sh -c "$(curl -fsSL https://starship.rs/install.sh)" -- --yes

ENV USER masaharu
ENV HOME /home/${USER}
ENV SHELL /usr/bin/fish

RUN useradd -m ${USER}
USER ${USER}
WORKDIR ${HOME}

RUN git clone https://github.com/masa-08/dotfiles.git
RUN mkdir -p ${HOME}/.config/fish && \
    ln -s ${HOME}/dotfiles/.config/fish/config.fish ${HOME}/.config/fish/config.fish && \
    ln -s ${HOME}/dotfiles/.gitconfig ${HOME}/.gitconfig && \
    ln -s ${HOME}/dotfiles/starship.toml ${HOME}/.config/starship.toml