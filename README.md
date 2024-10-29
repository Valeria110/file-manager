# :file_folder:File manager 

_The file manager is able to do the following:_
- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Utilize Streams API
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files

## Start
The program is started by npm-script `start` in following way:
```bash
npm run start -- --username=your_username
```
To finish the program type `.exit` in the console or press `ctrl + c`.  

## :page_with_curl: List of operations and their syntax:
- **Navigation & working directory (nwd)**
    - Go upper from current directory (when you are in the root folder this operation doesn't change working directory)  
    ```bash
    up
    ```
    - Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
    ```bash
    cd path_to_directory
    ```
    - Print in console the list of all files and folders in the current directory. List contains:
        - files (with extension) and folder names
        - folders and files are sorted in alphabetical order ascending, but list of folders goes first
        - type of directory content is marked explicitly
    ```bash
    ls
    ```

- **Basic operations with files:**
    - Read a file and print its content in console: 
    ```bash
    cat path_to_file
    ```
    - Create empty file in the current working directory: 
    ```bash
    add new_file_name
    ```
    - Rename file: 
    ```bash
    rn path_to_file new_filename
    ```
    - Copy file: 
    ```bash
    cp path_to_file path_to_new_directory
    ```
    - Move file (same as copy but initial file is deleted): 
    ```bash
    mv path_to_file path_to_new_directory
    ```
    - Delete file: 
    ```bash
    rm path_to_file
    ```
- **Operating system info (prints the following information in console)**
    - Get EOL (default system End-Of-Line) and print it to console  
    ```bash
    os --EOL
    ```
    - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console  
    ```bash
    os --cpus
    ```
    - Get home directory and print it to console  
    ```bash
    os --homedir
    ```
    - Get current *system user name* and print it to console  
    ```bash
    os --username
    ```
    - Get CPU architecture for which Node.js binary has compiled and print it to console  
    ```bash
    os --architecture
    ```
- **Hash calculation** 
    - Calculate hash for file and print it into console  
    ```bash
    hash path_to_file
    ```
- **Compress and decompress operations**  
    - Compress file (using Brotli algorithm, should be done using Streams API)  
    ```bash
    compress path_to_file path_to_destination
    ```
    - Decompress file (using Brotli algorithm)  
    ```bash
    decompress path_to_file path_to_destination
    ```  
