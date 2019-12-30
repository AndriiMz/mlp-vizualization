<template>
    <div class="m-4" style="max-width: 600px;">
        <h3 >Dokumentacja</h3>

        <h5 class="mt-2">Cel</h5>
        <div class="mb-3">
            <p>
                Celem aplikacji jest popularyzacja sieci neuronowych wśród studentów kierunków informatycznych.
                Są zainteresowane studenci które chcą zrozumieć sieci neuronowe i na początku ciężko jest wyobrażać
                działanie sieci w głowie. Ten problem rozwiązuje zbudowana aplikacja przez wizualizację działania
                sieci MLP.
            </p>
        </div>
        <h5 class="mt-2">Możliwości aplikacji</h5>
        <div class="mb-3">
            <p>Aplikacja umożliwia sterowanie następującymi elementami sieci:</p>
            <ul>
                <li>rozmiar wejścia/wyjścia</li>
                <li>rozmiar warstwy ukrytej oraz funkcja aktywacji</li>
                <li>współczynnik uczenia</li>
                <li>zbiory danych</li>
            </ul>
            <p>
                Aplikacja umożliwia sterowanie siecią. Wykres błędu oraz klasyfikacja podanych wartości
                dostępne są w każdym momencie odtwarzania.
            </p>
        </div>
        <h5 class="mt-2">Formularze</h5>
        <div class="mb-3">
            <p>
                Aplikacja zawiera pięć formularzy sterowniczych. <br/>
                Na rysunku poniżej przedstawiono formularz do wprowadzania rozmiarów wejścia/wyjścia:
            </p>
            <img src="../assets/img/io.png" />
            <p>Na następnym rysunku przedstawiono formularz pozwalający dodawać warstwy ukryte:</p>
            <img src="../assets/img/hl.png" />
            <p>
                Ważnym parametrem sieci neuronowych jest współczynnik uczenia.
                Współczynnik uczenia wprowadzany jest przez następujący formularz:
            </p>
            <img src="../assets/img/lr.png" />
            <p>
                Po zbudowaniu sieci potrzeba jest wytrenować jej na zbiorze danych.
                Zbiór danych w aplikacji wprowadzany jest przez formularz:
            </p>
            <img src="../assets/img/ds.png" />
            <p>
                Wytrenowana sieć neuronowa pozwala na klasyfikację
                danych przez następujący formularz:
            </p>
            <img src="../assets/img/cls.png" />
            <p>
                Formularz "przykładowe problemy" umożliwia demonstrację
                działania przygotowanych sieci dla zdefiniowanych problemów.
            </p>
            <img src="../assets/img/prst.png" />
        </div>

        <h5 class="mt-2">Sterowanie</h5>
        <div class="mb-3">
            <p>
                Sterowanie sieci wykonywane jest przez największe przyciski aplikacji. "Start" uruchamia sieć.
                Przyciskiem "Next" dokonywane są kroki trenowania.
                Przycisk "Reset" usuwa wszystkie dane i pozwala na budowanie sieci od nowa.
            </p>
            <img src="../assets/img/strt-next-reset.png" />
        </div>
    </div>
</template>

<script>

    export default {
        name: "Docs",
        computed: {},
        components: {},
        mounted() {},
        methods: {},
    };
</script>

