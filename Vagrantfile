Vagrant.configure("2") do |config|
  # 1. La imagen de Ubuntu que ya tienes
  config.vm.box = "ubuntu/focal64"
  config.vm.box_version = "20240821.0.1"

  # 2. Abrir el puerto para ver tu web en http://localhost:8080
  config.vm.network "forwarded_port", guest: 80, host: 8080

  # 3. SINCRONIZACIÓN: Lo que tú hagas en la carpeta "web" de Windows
  # aparecerá solito en la carpeta de Apache de Linux.
  config.vm.synced_folder "./web", "/var/www/html", owner: "www-data", group: "www-data"

  # 4. APROVISIONAMIENTO: Instala Apache automáticamente sin que tú entres a la VM
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y apache2
    # Aseguramos que Apache tenga permisos para leer tu carpeta
    chmod -R 755 /var/www/html
  SHELL
end
