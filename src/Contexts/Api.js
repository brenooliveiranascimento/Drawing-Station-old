import React, { useState, createContext } from "react";
export const ExerContext = createContext()
import { View, Text } from 'react-native';

export default function ExercicioProvider({children}){

    const [marca, setMarca] = useState('fabber');

    const [degradeVermelho,setDegradeVermelho] = useState([
        {cor:'preto',
         descricao:`Primeira cor que utilizaremos será o preto.
          como é a primeira camada de lápis, é normal que fique vários pontinhos
          brancos, mas a tendencia é eles irem se preenchendo conforme aplicarmos as camadas`,
          url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(17).png?alt=media&token=ee9d66b9-a728-483e-b00d-880ecbac614d',
        },
        {cor:'cinza escuro',
         descricao:`Próxima cor que utilizaremos será o cinza escuro, aplicaremospor toda a aré onde aplicamos o lápis preto
         com a mesma idéia de aplicar mais força na aréa de sombra e ir soltando mais a mão
         conforme se aproxima da aréa de luz`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(18).png?alt=media&token=8d361afe-c672-49e3-8cc2-37f28386b7d2'
        },
        {cor:'Vermelho escuro',
         descricao:`Próxima cor que aplicaremos será o vermelho escuro, podemos aplicar bem mais pressão
         nas aréas onde nos aplicamos o preto e o marrom para já irmos finalizando
         a aréa de sombra, e soltamos mais a mão conforme nos aproximamos da aréa de luz`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(19).png?alt=media&token=5fc56c30-a2b7-4c98-a827-09d70a99b206'
        },
        {cor:'preto',
         descricao:`Retornamos com o Preto para escurecer mais a area de sombra apertando um pouco mais a mão,
         mas não tanto pois ainda aplicaremos outras camadas a seguir`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(20).png?alt=media&token=8a618c37-2fa5-42d2-9e72-2e84fb6e4d7b'
        },
        {cor:'cinza escuro',
         descricao:`Novamente voltamos com o cinza escuro para preencher mais os poros brancos do papel`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(21).png?alt=media&token=a69e5e57-ffd1-463f-a412-649d6d1d5c80'
        },
        {cor:'vermelho escuro',
         descricao:`Voltamos agora com o vermelho escuro, agora apertando bem a mão para já finalizarmos essa aréa de sombra do desenho, e preenchendo mais ainda o quadrado preparando terreno para a próxima cor`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(22).png?alt=media&token=9e355dd6-8499-4bf0-adff-80285bdd807e'
        },
        {cor:'Vermelho',
         descricao:`Agora é o vermelho, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(23).png?alt=media&token=63d3721c-85a6-448e-99e4-caa586f768b0'
        },
        {cor:'Rosa Claro',
         descricao:`Agora é o vermelho, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(24).png?alt=media&token=ac8c597a-ff77-4131-93f9-0fc04fd6222d'
        },
        {cor:'branco',
         descricao:`por fim utilizaremos o branco apenas na aréa extrema de luz onde falta finalizar o rosa claro`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVermelho%2FCaptura%20de%20Tela%20(25).png?alt=media&token=01d20a2e-c3a2-4c2c-9a55-bbf2146c0c50'
        },
    ]);

    const [degradeVerde, setDegradeVerde] = useState([
        {cor:'preto',
         descricao:`Primeira cor que utilizaremos será o preto.
          como é a primeira camada de lápis, é normal que fique vários pontinhos
          brancos, mas a tendencia é eles irem se preenchendo conforme aplicarmos as camadas`,
          url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(26).png?alt=media&token=6d9af340-35d1-46df-a75e-40bcc758ad20',
        },
        {cor:'cinza escuro',
         descricao:`Próxima cor que utilizaremos será o cinza escuro, aplicaremospor toda a aré onde aplicamos o lápis preto
         com a mesma idéia de aplicar mais força na aréa de sombra e ir soltando mais a mão
         conforme se aproxima da aréa de luz`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(27).png?alt=media&token=52afa48d-f05a-4471-9443-7014628920e9'
        },
        {cor:'verde',
         descricao:`Próxima cor que aplicaremos será o verde, podemos aplicar bem mais pressão
         nas aréas onde nos aplicamos o preto e o marrom para já irmos finalizando
         a aréa de sombra, e soltamos mais a mão conforme nos aproximamos da aréa de luz`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(28).png?alt=media&token=9a102f26-3d33-4213-bcb3-1cff69e8fa29'
        },
        {cor:'preto',
         descricao:`Retornamos com o Preto para escurecer mais a area de sombra apertando um pouco mais a mão,
         mas não tanto pois ainda aplicaremos outras camadas a seguir`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(29).png?alt=media&token=4f5d7034-957d-4e16-bd82-5cda59c1a27d'
        },
        {cor:'cinza escuro',
         descricao:`Novamente voltamos com o cinza escuro para preencher mais os poros brancos do papel`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(30).png?alt=media&token=9f5dab87-daa4-42e0-b492-59481b4e4625'
        },
        {cor:'Verde',
         descricao:`Voltamos agora com o Verde, agora apertando bem a mão para já finalizarmos essa aréa de sombra do desenho, e preenchendo mais ainda o quadrado preparando terreno para a próxima cor`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(31).png?alt=media&token=6281b4c5-bca7-4a14-9007-8ab412838db7'
        },
        {cor:'Verde folha',
         descricao:`Agora é o vermelho, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(32).png?alt=media&token=3c3188ca-acf9-4d2d-b6fc-54e191df19a6'
        },
        {cor:'Verde Claro',
         descricao:`Agora é o verde claro, vamos passar ele onde passamos o vermelho escuro, vale lembrar que não passaremos ele onde passamos o preto para essa aréa não perder a saturação`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(33).png?alt=media&token=1269128b-bf72-4726-bb79-4da879d6bccf'
        },
        {cor:'branco',
         descricao:`por fim utilizaremos o branco apenas na aréa extrema de luz onde falta finalizar o rosa claro`,
         url:'https://firebasestorage.googleapis.com/v0/b/drawning-station.appspot.com/o/degradeVerde%2FCaptura%20de%20Tela%20(34).png?alt=media&token=12a2c304-493a-473a-aa5e-0ec44b27f32e'
        },
    ]);


    

    return(
        <ExerContext.Provider
        value={{
            degradeVermelho,
            degradeVerde
        }}
        >
            {children}
        </ExerContext.Provider>
    )
}