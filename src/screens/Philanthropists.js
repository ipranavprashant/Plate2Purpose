import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import Donators from "../api/PhilanthropistsAPI";

const PhilanthropistCard = () => {

  return (
    <ScrollView style={styles.card}>
      <Text style={styles.title}>Top Philanthropists</Text>
      {Donators.map((Donators) => (
        <View key={Donators.id} style={styles.detailsContainer}>
          <Text style={styles.name}>{Donators.name}</Text>
          <Text style={styles.description}>Designation:{Donators.description}</Text>
          <Text style={styles.description}>Since:{Donators.since}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
});

export default PhilanthropistCard;
