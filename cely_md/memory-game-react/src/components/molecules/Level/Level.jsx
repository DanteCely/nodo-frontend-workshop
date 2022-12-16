import { useState, useEffect } from 'react';
import { RadioButtons } from '@components/atoms';
import { getLevels } from '@services/apis';
import i18n from '@i18n';

const namespace = 'level';

const getRadioBtns = (levels) => {
  return levels.map(({ width, height }) => `${width} x ${height}`);
};

export const Level = () => {
  const [levels, setLevels] = useState([{ label: '3 x 3', width: 3, height: 3 }]);

  useEffect(() => {
    getLevels().then((data) => {
      setLevels(data.levels);
    });
  }, []);

  return (
    <aside className={namespace}>
      {/* <RadioButtons legend={i18n('LEVEL')} radioBtns={getRadioBtns(levels)} name={'level'} /> */}
    </aside>
  );
};
