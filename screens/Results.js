import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import GoBack from '../components/GoBack';
import Filter from '../components/Filter';
import Analysis from '../components/Analysis';
import { useNavigation } from "@react-navigation/native";

const Results = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalAnalyses = 35; 
  const analysesPerPage = 5; 
  const totalPages = Math.ceil(totalAnalyses / analysesPerPage); 
  const navigation = useNavigation();

  const handleAnalysisPress = (pageNumber) => {

    navigation.navigate('Dashboard');
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const renderAnalysis = () => {
    const startIndex = (currentPage - 1) * analysesPerPage;
    const endIndex = startIndex + analysesPerPage;
    const analyses = [];

    for (let i = startIndex; i < endIndex && i < totalAnalyses; i++) {
      analyses.push(
        <TouchableOpacity key={i + 1} onPress={() => handleAnalysisPress(i + 1)}>
          <Analysis pageNumber={i + 1} />
        </TouchableOpacity>
      );
    }

    return analyses;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const showEllipses = totalPages > 5;

    if (showEllipses && currentPage > 2) {
      pageNumbers.push(
        <TouchableOpacity key={1} onPress={() => goToPage(1)} style={styles.pageNumber}>
          <Text style={styles.pageNumberText}>1</Text>
        </TouchableOpacity>
      );
      pageNumbers.push(
        <Text key="ellipsis1" style={styles.ellipsis}>...</Text>
      );
    }

    const start = Math.max(currentPage - 1, 1);
    const end = Math.min(currentPage + 1, totalPages);
    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <TouchableOpacity
          key={i}
          onPress={() => goToPage(i)}
          style={[styles.pageNumber, currentPage === i ? styles.activePage : null]}
        >
          <Text style={[styles.pageNumberText, currentPage === i ? styles.activePageText : null]}>{i}</Text>
        </TouchableOpacity>
      );
    }

    if (showEllipses && currentPage < totalPages - 1) {
      pageNumbers.push(
        <Text key="ellipsis2" style={styles.ellipsis}>...</Text>
      );
      pageNumbers.push(
        <TouchableOpacity key={totalPages} onPress={() => goToPage(totalPages)} style={styles.pageNumber}>
          <Text style={styles.pageNumberText}>{totalPages}</Text>
        </TouchableOpacity>
      );
    }

    return pageNumbers;
  };

  return (
    <View style={styles.container}>
      <GoBack />
      <View style={styles.dropdownContainer}>
        <Filter />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderAnalysis()}
      </ScrollView>
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="#F1F3F4" />
        </TouchableOpacity>
        {renderPageNumbers()}
        <TouchableOpacity onPress={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#F1F3F4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111315',
  },
  dropdownContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 3
  },
  pageNumber: {
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  pageNumberText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  activePage: {
    backgroundColor: '#F1F3F4', 
  },
  activePageText: {
    color: 'black',
  },
  ellipsis: {
    marginHorizontal: 5,
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default Results;
