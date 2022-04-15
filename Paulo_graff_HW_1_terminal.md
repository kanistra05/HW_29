**HW_1. The first part**
**Linux terminal (GitBash) commands**

1) Посмотреть где я

>pwd


>/Volumes/Mac/Courses_QA_29/homeWork_29

2) Создать папку

> mkdir HW_1

3) Зайти в папку

> cd HW_1

4) Создать 3 папки 
 
> mkdir Folde1 Folder2 Folder3

5) Зайти в любоую папку 
 
> cd Folder1

6) Создать 5 файлов (3 txt, 2 json) 

> touch file1.txt file2.txt file3.txt file4.json file5.json

7) Создать 3 папки 

> mkdir dir1 dir2 dir3

8. Вывести список содержимого папки 

> ls -la

9) + Открыть любой txt файл 
 
> cat >> /.. /file1.txt

10) + написать туда что-нибудь, любой текст. 
  
> qwer
assdf  
zxcv
1234

11) + сохранить и выйти.

> ctrl+c

12) Выйти из папки на уровень выше 

> cd ..

13) переместить любые 2 файла, которые вы создали, в любую другую папку.

> cd Folder1/

> mv file1.txt file2.txt /Volumes/Mac/Courses_QA_29/homeWork_29/HW_1/Folder2

14) скопировать любые 2 файла, которые вы создали, в любую другую папку.

> cp file3.txt file4.json /Volumes/Mac/Courses_QA_29/homeWork_29/HW_1/Folder3

15) Найти файл по имени
 
> find / -name "file1.txt"

>find /Volumes/Mac -name "file1.txt"

16) просмотреть содержимое в реальном времени (команда grep) изучите как она работает.

>tail -f -n2 /Volumes/Mac/Courses_QA_29/Test\{1..2\}/textLog.txt

17) вывести несколько первых строк из текстового файла

>head -n2 largeText.info

18) вывести несколько последних строк из текстового файла

>tail -n2 largeText.info

19) просмотреть содержимое длинного файла (команда less) изучите как она работает.

>tail -f | grep -n 'jj' /Volumes/Mac/Courses_QA_29/Test\{1..2\}/textLog.txt

20) вывести дату и время

>date


Задание *
1) Отправить http запрос на сервер. http://162.55.220.72:5005/terminal-hw-request
 
>curl http://162.55.220.72:5005/terminal-hw-request
 
>curl "http://162.55.220.72:5005/get_method?name=Paulo&age=42"

2) Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13
 
```bash
#!/Bin/bash
#Зайти в папку 
cd /Volumes/Mac/Courses_QA_29/homeWork_29/HW_1
#Создать 3 папки
mkdir Folder1 Folder2 Folder3
#Зайти в любую папку
cd /Volumes/Mac/Courses_QA_29/homeWork_29/HW_1/Folder1
#Создать 5 файлов (3 txt, 2 json)
touch File1.txt File2.txt File3.txt File4.json File5.json
#Создать 3 папки
mkdir dir1 dir2 dir3
#Вывести список содержимого папки
ls -la
#переместить любые 2 файла, которые вы создали, в любую другую папку.
mv file1.txt file2.txt /Volumes/Mac/Courses_QA_29/homeWork_29/HW_1/Folder2
```