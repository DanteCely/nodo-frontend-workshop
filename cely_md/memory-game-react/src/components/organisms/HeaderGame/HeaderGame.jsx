import React from 'react';
import i18n from '@i18n';
import clsx from 'clsx';
import logoUrl from '@assets/img/card-game.webp';

const namespace = 'header-game';

export const HeaderGame = ({ className: extClassName }) => {
  const className = clsx(namespace, extClassName);

  return (
    <header className={className}>
      <img src={logoUrl} alt='logo memory game' />
      <div className={`${namespace}__title`}>
        <h1>{i18n('TITLE_APP')}</h1>
      </div>
    </header>
  );
};
