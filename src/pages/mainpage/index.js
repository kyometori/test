let content = '';

for (let i=0; i<1000; i++) {
  content += 'a a a a a a a a a a a a a a a a a a ';
}

export default function Mainpage() {
  return <>{content}</>;
}
