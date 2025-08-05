//Select database number (20)
select 1
select 5
select 19
select 20 //out of range

//String operasi
set test "M. Hasan" //membuat string key value -> set 'key' 'value'
get test //mendapatkan value dengan key -> get 'key' = "M. Hasan"| if kosong = nil
exists test //mengecek apakah key memiliki value = 1 | if kosong = 0
append test " QA" //menambah data value = "M. Hasan QA"
keys * //melihat semua key available
keys test* //melihat semua key available dengan prefix 'test'
del test //menghapus key

// String operasi range
set hasan "M. Has4n"
get hasan
setrange hasan 3 "Hasan QA" //set dari range 3 = "M. Hasan QA"
get hasan //sudah berubah menjadi "M. Hasan QA"
getrange hasan 3 11 //get range 3 s/d 11 = "Hasan QA"

//String operasi multiple
mset budi "Budi Nugro" cindy "Cindy Eka" Dian "Dian Permata" //multiple set key value
keys * //show semua key value
mget cindy Dian budi hasan //multiple get key

