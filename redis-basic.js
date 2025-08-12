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

//Expiration
set hasan "M. Hasan"
ttl hasan //Time To Leave : hasilnya akan -1 krn belum di set TTL
expire hasan 15 //Set expired key hasan hanya 15 detik
ttl hasan //Sebelum 15 detik hasilnya menunjukkan detik tersisa data ready
ttl hasan //Setelah 15 detik hasilnya menunjukkan -2 krn sudah terhapus
setex hasan 60 "M. Hasan" //Set expire langsung ketika buat key value

//Increment & Decrement
incr counter //jika belum ada key, maka default 0 dan incr ke 1
incr counter //icr ke 2
get counter //Saat ini valuenya 2
decr counter //decr ke 1
decr counter //decr ke 0
get counter //Saat ini valuenya 0
incrby counter 3 //Incr set + 3 = 3
decrby counter 5//Decr set - 5 = -2
get counter //Saat ini valuenya -2

//Flush -> delete keys
select 0 //Gunakan db 0
mget cindy Dian budi hasan //get all keys
flushdb //Hapus semua keys from current db (0)
mget cindy Dian budi hasan //Sudah terhapus
set hasan "M. Hasan"
select 1
set hasan1 "M. Hasan 1"
flushall //Hapus semua keys dari semua db
keys * //Sudah terhapus
select 0
keys * //Sudah terhapus juga

//Pipeline
exit
redis-cli -h localhost -p 6379 -n 0 --pipe < input-file.txt //Input banyak comand sekali running dalam file
redis-cli -h localhost -p 6379
select 0
keys * //muncul semua keys tadi (senior, lead, manager)
mget senior lead manager //Get data sesuai

//Transaction
multi //start transaction
set laptop "Macbook" //Queued, dalam antrian execution
get laptop //Belum ada value, masih antri
set hanphone "Iphone" //Queued
set komputer "Mac Mini" //Queued
exec //Semua akan dieksekusi disini
mget laptop hanphone komputer //Sukses get semua value sesuai
multi //start transaction lagi
set satu "Satu"
set dua "Dua"
set tiga "Tiga"
discard //Batalkan semua antria eksekusi
mget satu dua tiga //Gagal get semua value

//Monitor
monitor //Running di sesi yang berbeda untuk melihat semua perintah valid user
mget handphone laptop komputer //Perintah valid akan terecord di sesi monitor
salah //Perintah tidak valid tidak terecord monitor

//Server information
info //Melihat info server: os, memori, version dll
config get port //Melihat info port 'config get (nama config)'
config get databases //Melihat info database

//Client connection
client list //Untuk melihat list client yang tersambung
client id //Melihat id client saat ini
client kill 127.0.0.1:60646 //Kill client by addres yang didapat dari client list

//Protected mode
redis-server config/redis.conf //Restart redis server setelah update bind ke ip kita 'bind 192.168.1.19'
redis-cli -h 192.168.1.19 -p 6379 //Restart redis server menggunakan ip bind










