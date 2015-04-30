<script type="text/javascript">
    $( function() {

        $('#bt-fechar').click(function(){
            $(this).parent('div').hide('fast');
            bannerVer = false;
        });

        $('#bt-fechar').click(function(){
            $(this).parent('div').open('fast');
            bannerVer = false;
        });

        var imagens_produto = <?php echo json_encode($imagens_produto);?>;

        monta_fotos_produto( imagens_produto );
    });
</script>