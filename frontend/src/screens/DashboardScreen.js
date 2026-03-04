import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import API from "../api/api";

export default function DashboardScreen({ token }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    API.get("finance/transactions/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      setTransactions(res.data);
    });
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Dashboard</Text>
      {transactions.map(t => (
        <Text key={t.id}>
          {t.title} - {t.amount}
        </Text>
      ))}
    </View>
  );
}
