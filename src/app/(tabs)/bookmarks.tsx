import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStudents } from "../../context/students-context";

export default function Bookmarks() {
  // Context theke same list — proman je onno screen o global state dekhte pay
  const { students } = useStudents();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Bookmarks</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Total students in directory: {students.length}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F4F8" },
  titleBar: { paddingHorizontal: 16, paddingVertical: 14, backgroundColor: "#0D1F4E" },
  title: { fontSize: 20, fontWeight: "bold", color: "#FFFFFF" },
  body: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 16, color: "#0D1F4E", fontWeight: "600" },
});