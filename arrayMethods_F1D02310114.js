// 

const mahasiswa = [
    {nim: "20230114", nama: "izzat", umur: "20", fakultas: "stei"},
    {nim: "20230098", nama: "abdi", umur: "25", fakultas: "stei"},
    {nim: "20230042", nama: "Alfia", umur: "20", fakultas: "stei"},
    {nim: "20220052", nama: "Nufa", umur: "22", fakultas: "fttm"},
    {nim: "20220048", nama: "Fadila", umur: "19", fakultas: "ftmd"},
    {nim: "20230138", nama: "Suci", umur: "17", fakultas: "ftmd"},
    {nim: "20250666", nama: "Faadlullah", umur: "23", fakultas: "fsrd"},
    {nim: "20250779", nama: "RIzaldi", umur: "15", fakultas: "stei"},
    {nim: "20240144", nama: "Bayu", umur: "19", fakultas: "fsrd"},
    {nim: "20240045", nama: "Reksa", umur: "18", fakultas: "fttm"}
];

console.table(mahasiswa)

//Penggunaan MAP()
const mapNama = mahasiswa.map(mhs => mhs.nama.toUpperCase());
console.log("Nama Mahasiswa: ", mapNama);
console.log("\n")

//Penggunaan Filter()
const filterNama = mahasiswa.filter(mhs => mhs.nama.length > 5).map(mhs => `Nim: ${mhs.nim} Nama: ${mhs.nama}`);
console.log("Usia Mahasiswa: ", filterNama)
console.log("\n")

//Penggunaan Reduce()
const reduceMhs = mahasiswa.reduce((acc, _, index) => index + 1, 0)
console.log("Jumlah mahasiswa: ", reduceMhs)
console.log("\n")

//Penggunaan Find()
const findNim = mahasiswa.find(mhs => mhs.nim == 20230114)
console.log("Hasil: ", findNim)
console.log("\n")

//Penggunaan Some()
const someFakultas = mahasiswa.some(mhs => mhs.fakultas == "ftmd")
console.log("Apakah ada mahasiswa fakultas ftmd? ", someFakultas)
console.log("\n")

//Penggunaan every()
const everyNim = mahasiswa.every(mhs => mhs.nim == 2023)
console.log("Apakah Mahasiswa Angkatan 2023 saja? ", everyNim)
console.log("\n")