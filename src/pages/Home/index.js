import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const EXPENSE = 0;
const REVENUE = 1;

const LIST = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "11/09/2022",
    type: EXPENSE,
  },
  {
    id: 2,
    label: "Pix cliente x",
    value: "2.500,00",
    date: "12/09/2022",
    type: REVENUE,
  },
  {
    id: 3,
    label: "Salário",
    value: "7.500,00",
    date: "18/09/2022",
    type: REVENUE,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Michael" />
      <Balance balance="3.000,00" spent="390,00" />

      <Actions />

      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={LIST}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements dataMovement={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
