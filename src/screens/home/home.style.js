import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    borderRadius: 4, 
    borderWidth: 1, 
    borderColor: '#b9b9b9',
    padding: 3,
    paddingHorizontal: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    gap: 10
  },
  taskContainer: {
    marginHorizontal: 15,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#b9b9b950',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    height: 20, 
    width: 20,
  },
  addButton: {
    backgroundColor: '#007aff',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 8.5,
    borderRadius: 4,
  }
});

export default styles;