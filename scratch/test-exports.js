import * as Lucide from 'lucide-react';
console.log('Exports count:', Object.keys(Lucide).length);
console.log('Includes Twitter:', Object.keys(Lucide).filter(k => k.toLowerCase().includes('twitter')));
console.log('Includes Github:', Object.keys(Lucide).filter(k => k.toLowerCase().includes('github')));
console.log('Includes Facebook:', Object.keys(Lucide).filter(k => k.toLowerCase().includes('facebook')));
console.log('Includes Brand:', Object.keys(Lucide).filter(k => k.toLowerCase().includes('brand')));

