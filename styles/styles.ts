import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  camera: {
    flex: 1,
  },
  preview: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#7B2CBF',
    shadowColor: '#5A189A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  Addbutton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 80,
    backgroundColor: '#7B2CBF',
    shadowColor: '#5A189A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: '#9D4EDD',
  },
  cancelButton: {
    backgroundColor: '#E2C0FF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#5A189A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  entryItem: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
  },
  entryImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  entryDetails: {
    marginBottom: 10,
  },
  removeButton: {
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noEntriesContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});