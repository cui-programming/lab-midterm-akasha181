import { StyleSheet } from 'react-native';

/**
 * Modern & Unique Stylesheet
 * Consistent design system for all screens and components.
 */

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa', // softer tone for modern UI
    padding: 24,
  },

  headerText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1e293b', // dark slate tone
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  section: {
    marginVertical: 18,
    padding: 18,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    shadowColor: '#1e293b',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 10,
    color: '#0f172a',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 4,
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },

  itemName: {
    flex: 1,
    fontSize: 17,
    color: '#334155',
    fontWeight: '500',
  },

  counter: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563eb',
    marginHorizontal: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#1e293b',
  },

  button: {
    backgroundColor: '#2563eb', // blue-600 tone
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563eb',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
