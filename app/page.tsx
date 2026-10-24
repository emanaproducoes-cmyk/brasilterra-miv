import { Rail, Cover } from '../components/sections/Cover';
import S01 from '../components/sections/S01Conceito';
import { S02, S03 } from '../components/sections/S02S03';
import S04 from '../components/sections/S04Paletas';
import S05 from '../components/sections/S05Tipografia';
import { S06, S07 } from '../components/sections/S06S07';
import S08 from '../components/sections/S08Aplicacoes';
import Extras from '../components/sections/Extras';
import Closing from '../components/sections/Closing';
import Effects from '../components/Effects';

export default function Page() {
  return (
    <>
      <Rail />
      <main className="manual">
        <Cover />
        <S01 />
        <S02 />
        <S03 />
        <S04 />
        <S05 />
        <S06 />
        <S07 />
        <S08 />
        <Extras />
        <Closing />
      </main>
      <Effects />
    </>
  );
}
