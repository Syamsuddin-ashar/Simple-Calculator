// Mendapatkan elemen input tampilan kalkulator
let display = document.getElementById('display');
let memory = 0; // Variabel untuk menyimpan nilai memori kalkulator

// Menambahkan angka ke tampilan kalkulator
function appendNumber(number) {
    display.value += number; // Menambahkan angka ke nilai yang sudah ada di tampilan
}

// Menambahkan operator ke tampilan kalkulator
function appendOperator(operator) {
    display.value += ` ${operator} `; // Menambahkan operator dengan spasi di sekelilingnya
}

// Menghitung hasil dari ekspresi di tampilan kalkulator
function calculateResult() {
    try {
        // Menggunakan eval untuk mengevaluasi ekspresi matematika
        // Harap berhati-hati dengan eval karena dapat menjalankan kode berbahaya jika input tidak terkontrol
        display.value = eval(display.value).toString(); // Menampilkan hasil perhitungan
    } catch {
        display.value = 'Error'; // Menampilkan pesan kesalahan jika ekspresi tidak valid
    }
}

// Menghapus semua isi tampilan kalkulator
function clearDisplay() {
    display.value = ''; // Mengosongkan tampilan kalkulator
}

// Menghapus digit terakhir dari tampilan kalkulator
function deleteDigit() {
    display.value = display.value.slice(0, -1); // Menghapus karakter terakhir dari string tampilan
}

// Mengubah tanda angka di tampilan kalkulator dari positif ke negatif atau sebaliknya
function toggleSign() {
    if (display.value.startsWith('-')) {
        display.value = display.value.slice(1); // Menghapus tanda minus jika ada
    } else {
        display.value = '-' + display.value; // Menambahkan tanda minus jika tidak ada
    }
}

// Menghitung persentase dari nilai yang ditampilkan
function calculatePercentage() {
    try {
        display.value = (parseFloat(eval(display.value)) / 100).toString(); // Menghitung persentase dan menampilkan hasilnya
    } catch {
        display.value = 'Error'; // Menampilkan pesan kesalahan jika perhitungan tidak valid
    }
}

// Menghitung akar kuadrat dari nilai yang ditampilkan
function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(parseFloat(eval(display.value))).toString(); // Menghitung akar kuadrat dan menampilkan hasilnya
    } catch {
        display.value = 'Error'; // Menampilkan pesan kesalahan jika perhitungan tidak valid
    }
}

// Menghapus nilai memori kalkulator
function memoryClear() {
    memory = 0; // Mengatur memori kalkulator menjadi 0
}

// Menambahkan nilai tampilan kalkulator ke memori
function memoryAdd() {
    try {
        memory += parseFloat(display.value); // Menambahkan nilai tampilan ke memori
    } catch {
        display.value = 'Error'; // Menampilkan pesan kesalahan jika nilai tidak valid
    }
}

// Mengambil nilai dari memori dan menampilkannya di tampilan kalkulator
function memoryRecall() {
    display.value = memory.toString(); // Menampilkan nilai memori di tampilan kalkulator
}

// Mengurangi nilai tampilan kalkulator dari memori
function memorySubtract() {
    try {
        memory -= parseFloat(display.value); // Mengurangi nilai tampilan dari memori
    } catch {
        display.value = 'Error'; // Menampilkan pesan kesalahan jika nilai tidak valid
    }
}

// Menyimpan nilai tampilan kalkulator ke dalam memori
function memoryStore() {
    try {
        memory = parseFloat(display.value); // Menyimpan nilai tampilan ke memori
    } catch {
        display.value = 'Error'; // Menampilkan pesan kesalahan jika nilai tidak valid
    }
}
