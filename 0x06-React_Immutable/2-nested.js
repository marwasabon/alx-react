export default function accessImmutableObject(object, array) {  
  return array.reduce((acc, key) => {  
    return acc && typeof acc === 'object' ? acc[key] : undefined;  
  }, object);  
}
